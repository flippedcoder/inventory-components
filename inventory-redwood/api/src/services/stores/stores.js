import { db } from 'src/lib/db'

export const stores = () => {
  return db.store.findMany()
}

export const store = ({ id }) => {
  return db.store.findOne({
    where: { id },
  })
}

export const createStore = ({ input }) => {
  return db.store.create({
    data: input,
  })
}

export const updateStore = ({ id, input }) => {
  return db.store.update({
    data: input,
    where: { id },
  })
}

export const deleteStore = ({ id }) => {
  return db.store.delete({
    where: { id },
  })
}
