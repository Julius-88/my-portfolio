// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string",
        },
        {
            name: "date",
            type: "date",
        },

        {
            name: "description",
            type: "text",
        },
        {
            name: "projectType",
            title: "Project type",
            type: "string",
            options: {
                list: [
                    { value: "personal", title: "Personal" },
                    { value: "client", title: "Client" },
                    { value: "school", title: "School" },
                    { value: "udemy", title: "Udemy" },
                    { value: "youtube", title: "Youtube" },
                ],
            },
        },
        {
            name: "link",
            type: "url",
        },
    ],
};