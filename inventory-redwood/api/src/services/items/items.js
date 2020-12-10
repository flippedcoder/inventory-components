import { db } from "src/lib/db"

export const items = () => {
  return db.items.findMany()
}