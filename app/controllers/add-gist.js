import Controller from '@ember/controller';

export default class AddGistController extends Controller {
    gists = [
        {
            fileName: 'example.hbs',
            description: "just an ex",
            body: '<b>example:</b> for {{username}}'
        }, {
            fileName: 'another-example.js',
            description: "some js",
            body: `
                import Component from '@glimmer/component';

                export default class MyComponent extends Component {
                    variable = "value";
                }
            `
        }, {
            fileName: 'third-example.hbs',
            description: "some more hbs",
            body: '<b>the third one</b>'
        }
    ]
}
