import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  author: DS.attr('string')
}).reopenClass({
    FIXTURES: [
        {
            id: 1,
            title: "Svět podle Garpa",
            author: "John Irving"
        },
        {
            id: 2,
            title: "Kdo chytá v žitě",
            author: "Jerome David Salinger"
        },
        {
            id: 3,
            title: "Velký Gatsby",
            author: "Francis Scott Fitzgerald"
        }
    ]
});;
