import React from 'react';
import {render, screen} from '@testing-library/react';
import Form from '../components/form/Form';
import userEvent from '@testing-library/user-event';
import { CURRENCIES, criptos } from '../__mocks__/criptocurrency';
import axios from 'axios';

const mockAxios = axios;
const saveCriptoCurrency = jest.fn();
const saveCurrency = jest.fn();

test('useCriptocurrency', async ()=>{

    mockAxios.get = jest.fn().mockResolvedValue({
        data: criptos
    })

    render(<Form
        saveCriptoCurrency={saveCriptoCurrency}
        saveCurrency={saveCurrency}
    ></Form>);
    const sCurrency = screen.getByTestId('select-currency');
    expect(sCurrency.children.length).toEqual(CURRENCIES.length + 1);

    const options = screen.findAllByTestId('criptoOption');
    expect(await options).toHaveLength(10);

    expect(mockAxios.get).toHaveBeenCalled();
    expect(mockAxios.get).toHaveBeenCalledTimes(1);

    userEvent.selectOptions(screen.getByTestId('select-currency'), 'USD');
    userEvent.selectOptions(screen.getByTestId('criptoSelect'), 'BTC');

    userEvent.click(screen.getByTestId('submit'));

    expect(saveCriptoCurrency).toHaveBeenCalled();
    expect(saveCurrency).toHaveBeenCalled();

});