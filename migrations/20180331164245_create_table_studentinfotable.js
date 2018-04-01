exports.up = function(knex, Promise) {
  return knex.schema.createTable("studentinfotable", (table) => {
    // id
    table.increments();
    // headshot
    table.string('headshot');
    // full name
    table.string('fullname');
    // github
    table.string('github');
    // linkedin
    table.string('linkedin');
    // email address
    table.string('email');
    // personal website
    table.string('personalsite');
    // linke to deployed capstone project
    table.string('capstonelink');
    // blurb describing the capstone project
    table.string('capstonedesc');
    // q1 project
    table.string('q1project');
    // q2 project
    table.string('q2project');
    // q3 project
    table.string('q3project');
    // brief bio
    table.string('bio', 1000);
    // fun fact
    table.string('funfact');
    // fun pic
    table.string('funpic');
    // request resume
    table.string('requestresume');
    // extra space 1
    table.string('extraspace1');
    // extra space 2
    table.string('extraspace2');
    // extra space 3
    table.string('extraspace3');
    // extra space 4
    table.string('extraspace4');
    // extra space 5
    table.string('extraspace5');
    // timestamps
    table.timestamps(true, true);
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable("studentinfotable");
};
