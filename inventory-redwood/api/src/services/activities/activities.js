import { db } from "src/lib/db"

export const activities = () => {
  return db.activities.findMany()
}