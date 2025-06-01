import { c as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_B3pF-2QK.mjs';
import { $ as $$CardGrid, a as $$Card } from './Code_Ca2buJFr.mjs';
import 'clsx';

const frontmatter = {
  "title": "Welcome to Starlight",
  "description": "Get started building your docs site with Starlight.",
  "template": "splash",
  "hero": {
    "title": "Welcome to Starlight with\n<span\n  class=\"font-black text-transparent\n    bg-clip-text bg-gradient-to-b\n    from-accent-700 to-accent-400\n    dark:from-accent-500 dark:to-accent-200\"\n>\n  Tailwind\n</span>\n",
    "tagline": "Congrats on setting up a new Starlight project!",
    "image": {
      "file": "../../assets/houston.webp"
    },
    "actions": [{
      "text": "Example Guide",
      "link": "/guides/example/",
      "icon": "right-arrow"
    }, {
      "text": "Read the Starlight docs",
      "link": "https://starlight.astro.build",
      "icon": "external",
      "variant": "minimal"
    }]
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "next-steps",
    "text": "Next steps"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"next-steps\">Next steps</h2><a class=\"sl-anchor-link\" href=\"#next-steps\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Next steps”</span></a></div>\n"
    }), createVNode($$CardGrid, {
      stagger: true,
      children: [createVNode($$Card, {
        title: "Update content",
        icon: "pencil",
        "set:html": "<p>Edit <code dir=\"auto\">src/content/docs/index.mdx</code> to see this page change.</p>"
      }), createVNode($$Card, {
        title: "Add new content",
        icon: "add-document",
        "set:html": "<p>Add Markdown or MDX files to <code dir=\"auto\">src/content/docs</code> to create new pages.</p>"
      }), createVNode($$Card, {
        title: "Configure your site",
        icon: "setting",
        "set:html": "<p>Edit your <code dir=\"auto\">sidebar</code> and other config in <code dir=\"auto\">astro.config.mjs</code>.</p>"
      }), createVNode($$Card, {
        title: "Read the docs",
        icon: "open-book",
        "set:html": "<p>Learn more in <a href=\"https://starlight.astro.build/\">the Starlight Docs</a>.</p>"
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + ("component" ) + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}

const url = "src/content/docs/index.mdx";
const file = "C:/Users/15034/Projects/rpg-pub-astro-write/src/content/docs/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/15034/Projects/rpg-pub-astro-write/src/content/docs/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
