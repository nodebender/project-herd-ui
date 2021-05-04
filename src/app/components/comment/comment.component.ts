import { Component, OnInit, Input } from "@angular/core";

interface Comment {
	author: string
	message: string
	createdAt: number
}

@Component({
  selector: "app-comment",
  templateUrl: "./comment.component.html",
})
export class CommentComponent implements OnInit {

	@Input() comment: Comment

	constructor() {}

	ngOnInit(): void {}

}
