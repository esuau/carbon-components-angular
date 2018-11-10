import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs } from "@storybook/addon-knobs/angular";

import { ListGroupModule } from "../";

const basciModel = [
	{
		selected: false,
		disabled: false,
		content: "Item 1"
	},
	{
		selected: false,
		disabled: false,
		content: "Item 2"
	},
	{
		selected: false,
		disabled: false,
		content: "Item 3"
	}
];

storiesOf("List group", module).addDecorator(
	moduleMetadata({
		imports: [ListGroupModule]
	})
)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
		<ibm-list-group [items]="model"></ibm-list-group>
		`,
		props: {
			model: basciModel
		}
	}));
