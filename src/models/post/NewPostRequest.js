export class NewPostRequest {
    constructor(title, summary, category, author, date, content){
        this.title = title;
        this.summary = summary;
        this.category = category;
        this.author = author;
        this.date = date;
        this.content = content;
    }
}