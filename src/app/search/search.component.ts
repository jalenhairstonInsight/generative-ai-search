import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  private router: Router = inject(Router)

  @Input() searchValue: string = ""
  @Input() cssClass!: string;
  @Input() searchStatus: string = ""

  ngOnInit() {
    if (!this.searchValue) {
      this.searchValue = ""
    }
  }

  updateSearchValue(value: string) {
    this.searchValue = value
  }


  executeSearch() {
    this.router.navigate([('/result/' + this.searchValue)]);
  }

  isValidSearchValue(): boolean {
    return this.searchValue.length > 0
  }

  getStatusStyle(): any {
    if (this.searchStatus === "complete") {
      return {
        backgroundColor: "green"
      }
    }
    if (this.searchStatus === "pending") {
      return {
        backgroundColor: "yellow"
      }
    }
  }
}

