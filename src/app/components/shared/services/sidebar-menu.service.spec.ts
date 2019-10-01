import { TestBed } from '@angular/core/testing';

import { SidebarMenuService } from './sidebar-menu.service';

describe('SidebarMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SidebarMenuService = TestBed.get(SidebarMenuService);
    expect(service).toBeTruthy();
  });
});
