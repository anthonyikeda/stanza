/* eslint-env mocha */
import fs from 'fs';
import { assert } from 'chai';
import stanza from '../../../src/lib/index';
import createMeteorProject from '../helpers/create-meteor-project';

describe('update', () => {
  it('update a meteor app', () => {
    createMeteorProject();
    stanza('update');

    assert(fs.statSync('client/imports/components/ComponentA.jsx').isFile());
    assert(fs.statSync('public/images/webflow.jpg').isFile());
    assert(fs.statSync('client/css/lib/webflow.css').isFile());
  });
});
