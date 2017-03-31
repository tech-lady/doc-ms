import db from '../models';

export const createDocument = (req, res) => {
  console.log(req.decoded);
  const newDoc = {
    title: req.body.title,
    content: req.body.content,
    access: req.body.access,
    ownerId: req.decoded.userId,
    ownerRoleId: req.decoded.roleId
  };
  db.Document.findOne({ where:
  {
    title: newDoc.title
  }
  })
.then((docExist) => {
  if (docExist) {
    return res.status(409)
    .json({ message: `title: ${newDoc.title} already exist`})
  }
});
  db.Document.create(newDoc)
    .then(document => res.status(201).json(document))
    .catch(error => res.status(400).json(error));
};

export const getDocument = (req, res) => {
  db.Document.findById(req.params.id)
    .then((foundDoc) => {
      if (!foundDoc) {
        return res.status(404)
          .json({ message: `Document with id ${req.params.id} not found` });
      } else if (foundDoc.access === 'private' && foundDoc.ownerId === req.decoded.userId) {
        return res.status(200)
          .json(foundDoc);
      }
      res.status(200)
        .json(foundDoc);
    })
    .catch(error => res.status(500)
      .json({ message: 'An error occured', error }));
};

export const getUserDocument = (req, res) => {
  db.Document.findAll({
    where: {
      ownerId: req.params.id,
      $or: [
        { access: 'public' },
        { ownerid: req.decoded.userId }
      ]
    }
  })
    .then((document) => {
      if (!document) {
        return res.status(404)
          .json({ message: 'No match found for query' });
      }
      return res.status(200).json(document);
    })
    .catch(err => res.status(400).json(err));
};


export const countUsersDoc = (req, res) => {
    const page = helper.pagination(req);
    let rawQuery =
      `SELECT COUNT (*) FROM "Documents" INNER JOIN "Users" ON "Documents"."OwnerId" = "Users"."id" WHERE ("Users"."RoleId" = ${req.decoded.RoleId} AND "Documents"."access" = 'role') OR ("Documents"."OwnerId" = ${req.params.id})`;

    if (req.query.q) {
      rawQuery =
      `SELECT COUNT (*) FROM "Documents" INNER JOIN "Users" ON "Documents"."OwnerId" = "Users"."id" WHERE (("Users"."RoleId" = ${req.decoded.RoleId} AND "Documents"."access" = 'role') OR ("Documents"."OwnerId" = ${req.params.id})) AND (( "Documents"."title" ILIKE '%${req.query.q}%' ) OR ( "Documents"."content" ILIKE '%${req.query.q}%'))`;
    }
  db.sequelize.query(rawQuery, {
    type: db.sequelize.QueryTypes.SELECT
  })
    .then((count) => {
      if (!count) {
        return res.status(404)
          .send({ message: 'No document found' });
      }
      const meta = {};
      meta.totalCount = count[0].count;
      meta.pageSize = page.limit;
      meta.pageCount = Math.floor(meta.totalCount / page.limit) + 1;
      meta.currentPage = Math.floor(page.offset / page.limit) + 1;
      res.status(200).send({ paginationMeta: meta });
    }).catch((err) => {
      res.status(400).send(err.message);
    });
}



export const getDocuments = (req, res) => {
  db.Document.findAll()
    .then(document => res.status(200).json(document))
    .catch(error => res.status(400).json(error));
};

export const searchDocument = (req, res) => {
  db.Document.findAll({
    where: {
      access: 'public',
      $or: [{
        title: {
          $iLike: `%${req.query.q}%`
        }
      }]
    }
  })
    .then(document => res.status(200)
      .json(document))
    .catch(error => res.status(400)
      .json(error));
}

export const searchUserDocument = (req, res) => {
  db.Document.findAll({
    where: {
      userId: req.params.id,
      $or: [{
        content: {
          $iLike: `%${req.body.query}%`
        }
      }, {
        title: {
          $iLike: `%${req.body.query}%`
        }
      }]
    }
  })
    .then(document => res.status(200)
      .json(document))
    .catch(error => res.status(400)
      .json(error));
}


export const editDocument = (req, res) => {
  db.Document.findById(req.params.id)
    .then((document) => {
      if (!document) {
        return res.status(404)
          .json({ message: `documentid: ${req.body.id} does not exist` });
      }
      document.update(req.body)
        .then(() => {
          res.status(200).json({ message: 'Update successful' });
        })
        .catch((err) => {
          res.status(400)
            .json(err.errors);
        });
    });
};


export const deleteDocument = (req, res) => {
  db.Document.findById(req.params.id)
    .then((document) => {
      if (!document) {
        return res.status(404)
          .json({ message: `id ${req.body.id} does not exist` });
      }
      document.destroy();
      res.status(200).json({ message: 'Delete successful' });
    })
    .catch((err) => {
      res.status(400).json(err.errors);
    });
};
