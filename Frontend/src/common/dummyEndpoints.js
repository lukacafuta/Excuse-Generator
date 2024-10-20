const dummyEndpoints = [
    {
        id: "get-all-excuses",
        title: "Get all Excuses",
        description: "Get all excuses in the database",
        endpoint: "/excuse/",
        content: `
        [
            {
                "id": 1,
                "category": "School",
                "excuse": "My homework turned into origami after I accidentally spilled water on it."
            },
            {
                "id": 2,
                "category": "School",
                "excuse": "I thought today was Saturday, so I didn't show up."
            }
        ]
        `
    },
    {
        id: "get-specific-excuse",
        title: "Get a single Excuse",
        description: "Get a specific excuse by ID",
        endpoint: "/excuse/{ID}",
        example: "/excuse/1",
        content: `
        [
            {
                "id": 1,
                "category": "School",
                "excuse": "My homework turned into origami after I accidentally spilled water on it."
            }
        ]
        `
    },
    {
        id: "post-an-excuse",
        title: "Post an Excuse",
        description: "Add an Excuse to the database",
        endpoint: "/excuse/",
        content: `
        [
            {
                "id": 1,
                "category": "School",
                "excuse": "My homework turned into origami after I accidentally spilled water on it."
            }
        ]
        `
    },
    {
        id: "patch-an-excuse",
        title: "Patch an Excuse",
        description: "Partial update of an Excuse in the database",
        endpoint: "/excuse/",
        content: `
        [
            {
                "excuse": "My homework turned into origami after I accidentally spilled COFFEE on it."
            }
        ]
        `
    },
    {
        id: "delete-an-excuse",
        title: "Delete an Excuse",
        description: "Delete a specific Excuse by ID",
        endpoint: "/excuse/{ID}",
        example: "/excuse/1",
        content: `
        {
            "message": "Excuse deleted successfully."
        }
        `
    },
    {
        id: "search-for-excuses",
        title: "Search for Excuses",
        description: "Get all excuses from the database, containing a string in category or excuse",
        endpoint: "/excuse/search/{search_term}",
        example: "/excuse/search/homework/",
        content: `
        [
            {
                "id": 1,
                "category": "School",
                "excuse": "My homework turned into origami after I accidentally spilled water on it."
            }
        ]
        `
    }
];

export default dummyEndpoints;
