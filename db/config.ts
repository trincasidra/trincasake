import { column, defineTable, defineDb } from "astro:db";

const Place = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    name: column.text(),
    nameRoman: column.text({ optional: true }),
    rating: column.number({ optional: true }),
    review: column.text({ optional: true }),
    image: column.text({ optional: true }),
    website: column.text({ optional: true }),
    address: column.text(),
    gmaps: column.text(),
    city: column.text(),
    state: column.text(),
    country: column.text(),
    tags: column.text(),
    video: column.text({ optional: true }),
    needsReserve: column.boolean({ default: false }),
  },
});

export default defineDb({
  tables: {
    Place,
  },
});
