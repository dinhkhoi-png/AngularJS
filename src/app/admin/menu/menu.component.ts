import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  sidebarToggle() {

    let sidebar = document.getElementById('sidebar');

    if (sidebar?.style.display === "none") {
      sidebar.style.display = "block";
      return
    }

      sidebar!.style.display = "none";
    
  }

  profileToggle() {
    var profileDropdown = document.getElementById('ProfileDropDown');
    if (profileDropdown?.style.display === "block") {
      profileDropdown.style.display = "none";
    } else {
      profileDropdown!.style.display = "block";
    }
  }
}
