import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ProductCardComponent } from './product-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

export default {
  title: 'ProductCardComponent',
  component: ProductCardComponent,
  decorators: [
    moduleMetadata({
      imports: [MatCardModule, MatButtonModule],
    }),
  ],
  argTypes: { addToCart: { action: 'addToCart' } },
} as Meta<ProductCardComponent>;

const Template: Story<ProductCardComponent> = (args: ProductCardComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  product: {
    id: 'b71a5f5dfcf71dc27c42fe66',
    name: 'Hybrid Bicycle',
    price: '4961.0000',
    manufacturer: 'Ferrari',
    color: 'olive',
    desc: 'illum odit sunt et quaerat',
    shortDesc:
      'repellat mollitia sed soluta est vel qui dolorem quia ad voluptatem pariatur totam minus minus consectetur ad sit excepturi fugit',
    img: 'https://loremflickr.com/640/640/abstract',
  },
};
