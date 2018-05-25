import { Component, OnInit } from '@angular/core';

import { TransferService } from '../../services/transfer.service';
import { MainComponent } from '../../main.component';
import { Profile } from '../../entities';
import { DatastoreService } from '../../services/datastore.service';

@Component({
  selector: 'edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.less'],
  providers: [MainComponent]
})
export class EditProfileComponent implements OnInit {
    profile: any;
    profileName: string;
    originalProfileName: string;
    action: string;

    constructor(
        private transfer: TransferService,
        private main: MainComponent,
        private datastore: DatastoreService
    ) { }

    ngOnInit() {
        this.profile = this.transfer.itemForEditing;
        this.profileName = this.transfer.itemName;
        this.originalProfileName = this.transfer.itemName;
        this.action = this.transfer.action;
    }

    saveProfile() {
        this.datastore.save(this.profileName, this.profile, this.originalProfileName);
    }

    viewExistingProfiles() {
        this.main.goTo('')
    }
}
