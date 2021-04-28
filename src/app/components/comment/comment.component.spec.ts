import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Timer } from "@app/pipes/human-date.pipe";

import { CommentComponent } from "./comment.component";

describe("CommentComponent", () => {
  let component: CommentComponent;
  let fixture: ComponentFixture<CommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentComponent, Timer ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentComponent);
    component = fixture.componentInstance;

	component.comment = {
		author: "Testuser",
		message: "I am taking care of this problem at the moment. Just don’t touch anything...",
		created: 1618210814
	}

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render the author", () => {
    const compiled = fixture.nativeElement;
	const h5 = compiled.querySelector(".author h5")
	const author = h5.textContent.trim()
    expect(author).toBe("Testuser");
  });

  it("should render the message", () => {
    const compiled = fixture.nativeElement;
	const p = compiled.querySelector(".comment p")
	const message = p.textContent.trim()
    expect(message).toBe("I am taking care of this problem at the moment. Just don’t touch anything...");
  });
});
