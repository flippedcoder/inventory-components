import { db } from "src/lib/db"

export const alerts = () => {
  return db.alerts.findMany()
}