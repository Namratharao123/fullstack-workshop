function createLibrary() {

    let books = [];
    let members = [];
    let borrowHistory = [];

    return {

        addBook: function (book) {
            books.push(book);
        },

        addMember: function (member) {
            members.push(member);
        },

        borrowBook: function (memberId, isbn) {
            for (let i = 0; i < books.length; i++) {
                if (books[i].isbn === isbn && books[i].copies > 0) {
                    books[i].copies--;

                    borrowHistory.push({
                        memberId: memberId,
                        isbn: isbn,
                        title: books[i].title,
                        borrowedAt: new Date(),
                        returnedAt: null
                    });
                    return;
                }
            }
        },

        returnBook: function (memberId, isbn) {
            for (let i = 0; i < borrowHistory.length; i++) {
                if (
                    borrowHistory[i].memberId === memberId &&
                    borrowHistory[i].isbn === isbn &&
                    borrowHistory[i].returnedAt === null
                ) {
                    borrowHistory[i].returnedAt = new Date();

                    for (let j = 0; j < books.length; j++) {
                        if (books[j].isbn === isbn) {
                            books[j].copies++;
                        }
                    }
                    return;
                }
            }
        },

        getAvailableCopies: function (isbn) {
            for (let i = 0; i < books.length; i++) {
                if (books[i].isbn === isbn) {
                    return books[i].copies;
                }
            }
            return 0;
        },

        getMemberHistory: function (memberId) {
            let result = [];

            for (let i = 0; i < borrowHistory.length; i++) {
                if (borrowHistory[i].memberId === memberId) {
                    result.push(borrowHistory[i]);
                }
            }
            return result;
        },

        getOverdueBooks: function () {
            let overdue = [];
            let now = new Date();

            for (let i = 0; i < borrowHistory.length; i++) {
                if (borrowHistory[i].returnedAt === null) {
                    let diffDays =
                        (now - borrowHistory[i].borrowedAt) / (1000 * 60 * 60 * 24);

                    if (diffDays > 14) {
                        overdue.push(borrowHistory[i]);
                    }
                }
            }
            return overdue;
        },

        searchBooks: function (text) {
            let result = [];
            text = text.toLowerCase();

            for (let i = 0; i < books.length; i++) {
                if (
                    books[i].title.toLowerCase().includes(text) ||
                    books[i].author.toLowerCase().includes(text)
                ) {
                    result.push(books[i]);
                }
            }
            return result;
        }
    };
}
