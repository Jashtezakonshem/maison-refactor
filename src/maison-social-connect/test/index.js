'use strict';

process.env.NODE_ENV = 'test';

import test from 'ava';
import props from './../props';

const element = 'maison-social-connect';

test(`${element} properties: types & default values`, t => {
    t.is(props.prop.type, Boolean);
    t.is(props.prop.value, false);
});
