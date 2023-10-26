import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: window.location.pathname.substr(
        0,
        window.location.pathname.lastIndexOf('/')
      ),
    },
  ],
})
export class StoryBookCoreModule {}
