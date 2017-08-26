import React from 'react';
import reactDom from 'react-dom/server';
import test from 'tape';
import dom from 'cheerio';
import {Post} from './component';

const render = reactDom.renderToStaticMarkup;

test('<Post /> Component', nest => {
  nest.test('given a post', assert => {
    const msg = 'should render the title and content.';

    const props = {
      title: 'Test Post',
      content: 'I am thee test post content!'
    };

    const re = RegExp(props);

    const el = <Post props={props} />;
    const $ = dom.load(render(el));
    const output = $('.blogPost').html();

    const actual =  re.test(output);
    const expected = true;

    assert.equal(actual, expected, msg);

    assert.end();
  });
});
