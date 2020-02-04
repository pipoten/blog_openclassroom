export class Post{
    content: string= "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, consequatur! Corrupti sed, quia atque tenetur delectus illo amet, eius consequuntur id repellendus at.";
    loveIts: number=0;  
    created_at: Date;
    constructor(public title:string){
        this.created_at=new Date();
    }
}