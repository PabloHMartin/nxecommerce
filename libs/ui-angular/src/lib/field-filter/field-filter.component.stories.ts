import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { FieldFilterComponent } from './field-filter.component';
import { MatListModule } from '@angular/material/list';

export default {
  title: 'FieldFilterComponent',
  component: FieldFilterComponent,
  decorators: [
    moduleMetadata({
      imports: [MatListModule],
    }),
  ],
  argTypes: { clickFilter: { action: 'filterClick' } },
} as Meta<FieldFilterComponent>;

const Template: Story<FieldFilterComponent> = (args: FieldFilterComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  filterTitle: 'Colors',
  fieldNames: ['red', 'blue', 'white'],
};
