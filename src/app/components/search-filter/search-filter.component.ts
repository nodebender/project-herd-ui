import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
})
export class SearchFilterComponent implements OnInit {

  @Input() checks: any[]

  selectedTags: Set<string>

	constructor() {
	  this.selectedTags = new Set<string>()
  }

  get filtered() {
	  return this.checks
  }

  get tags(): string[] {
	  let list = new Set<string>()

	  this.checks.map(check => {

		  check.tags.map(tag => {
			  if (!this.selectedTags.has(tag)) {
				  list.add(tag)
			  }
		  })
	  })

	  return Array.from(list)
  }

  get selected() {
	  return Array.from(this.selectedTags)
  }

  exists(tag: string): boolean {
	  return this.selectedTags.has(tag)
  }

  select(tag: string) {
	  this.selectedTags.add(tag)
  }

  deSelect(tag: string) {
	  this.selectedTags.delete(tag)
  }

  ngOnInit() {}
}
