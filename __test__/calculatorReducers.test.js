import React from 'react'
import { shallow } from 'enzyme';

import calculatorReducers from '@/reducers/calculatorReducers'

describe('Calculator Reducer', () => {
    describe('Test calculatorReducers',()=>{
        it('reducer for ADD_INPUT', () => {
            let state = {output:0}
            state = calculatorReducers(state,{type:"ADD_INPUTS", output:500})
            expect(state).toEqual({output:500})
        });
        it('reducer for SUBTRACT_INPUT', () => {
            let state = {output:0}
            state = calculatorReducers(state,{output:50, type:"SUBTRACT_INPUTS"})
            expect(state).toEqual({output:50})
        });
    });
})
//*******************************************************************************************************