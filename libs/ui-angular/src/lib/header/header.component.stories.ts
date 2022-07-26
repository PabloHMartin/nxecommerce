import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { HeaderComponent } from './header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';

export default {
  title: 'HeaderComponent',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [
        MatToolbarModule,
        MatButtonModule,
        MatMenuModule,
        MatBadgeModule,
      ],
    }),
  ],
  argTypes: { onOpenCart: { action: 'cart btn clicked' } },
} as Meta<HeaderComponent>;

const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  title: 'Amsterdam BIKES',
  color: '',
  logoUrl: 'img/bike.png',
  cartIconUrl: 'img/cart-icon.svg',
  totalProductsInCart: 0,
};
