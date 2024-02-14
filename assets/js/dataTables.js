import simpleDatatables from "./simple-datatables";
import {DataTable} from "./simple-datatables";
const $ = require('jquery');

global.$ = global.jQuery = $;
import './simple-datatables'



const datatables = select('.datatable', true)

    new simpleDatatables.DataTable('#category_datatable', {
        perPageSelect: [5, 10, 15, ["All", -1]],
        columns: [{
            select: 2,
            sortSequence: ["desc", "asc"]
        },
            {
                select: 3,
                sortSequence: ["desc"]
            },
            {
                select: 4,
                cellClass: "green",
                headerClass: "red"
            }
        ]
    });


