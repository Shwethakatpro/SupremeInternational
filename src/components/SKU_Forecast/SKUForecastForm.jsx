import React from 'react'
import './skuForm.css'
import { Box} from '@mui/material';

const SKUForecastForm = () => {
    return (
        <Box sx={{ flexGrow: 1, paddingTop: '120px', paddingBottom: '60px', overflowY: 'auto', justifyContent: 'space-between' }}>
       
           
            <h2>SKU Unit Forecast</h2>
            <div className="sku-hide-scrollbar">
                <div className="sku-row">
                    <div className="sku-column">
                        <label for="forecast-duration">Forecast Duration</label>
                        <select id="forecast-duration">
                            <option value="2024">Forecast for 2024</option>
                        
                        </select>
                    </div>
                    <div className="sku-column">
                        <label for="account">Grandparent Account</label>
                        <select id="account">
                            <option value="grandparent">Grandparent Account</option>
                        
                        </select>
                    </div>
                    <div className="sku-column">
                        <label for="indirect-customer">Indirect Customer</label>
                        <select id="indirect-customer">
                            <option >Select an Indirect Customer</option>
                        </select>
                    </div>
                </div>

                <div className="sku-radio-group">
                    <label>
                        <input
                            type="radio"
                            name="forecast-option"
                            value="sku"
                            onclick="showNone();"
                            checked
                        />
                        Forecast for SKU
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="forecast-option"
                            onclick="showBlock();"
                            value="advanced-search"
                        />
                        Advanced Search
                    </label>
                </div>
                <div className="sku-hide" id="adv-search">
    <div className="sku-row">
        <div className="sku-column-round">
            <select className="sku-select" id="product-category">
                <option>Bowline Box C1T1 R3ED10</option>
            </select>
        </div>
    </div>
</div>


         
                <div className="sku-div-table">
                    <div className="sku-div-table-row-header">
                        <div className="sku-div-table-cell-header">2024</div>
                        <div className="sku-div-table-cell">Jan</div>
                        <div className="sku-div-table-cell">Feb</div>
                        <div className="sku-div-table-cell">Mar</div>
                        <div className="sku-div-table-cell">Apr</div>
                        <div className="sku-div-table-cell">May</div>
                        <div className="sku-div-table-cell">Jun</div>
                        <div className="sku-div-table-cell">Jul</div>
                        <div className="sku-div-table-cell">Aug</div>
                        <div className="sku-div-table-cell">Sep</div>
                        <div className="sku-div-table-cell">Oct</div>
                        <div className="sku-div-table-cell">Nov</div>
                        <div className="sku-div-table-cell">Dec</div>
                        <div className="sku-div-table-cell">Total</div>
                    </div>

                    <div className="sku-div-table-row">
                        <div className="sku-div-table-cell-header">List Price</div>
                        <div className="sku-div-table-cell">$0.91</div>
                        <div className="sku-div-table-cell">$0.91</div>
                        <div className="sku-div-table-cell">$0.91</div>
                        <div className="sku-div-table-cell">$0.91</div>
                        <div className="sku-div-table-cell">$0.91</div>
                        <div className="sku-div-table-cell">$0.91</div>
                        <div className="sku-div-table-cell">$0.91</div>
                        <div className="sku-div-table-cell">$0.91</div>
                        <div className="sku-div-table-cell">$0.91</div>
                        <div className="sku-div-table-cell">$0.91</div>
                        <div className="sku-div-table-cell">$0.91</div>
                        <div className="sku-div-table-cell">$0.91</div>
                        <div className="sku-div-table-cell">$0.91</div>
                    </div>

                    <div
                        className="sku-div-table-row extended"
                    >
                        Unit
                    </div>

                    <div className="sku-div-table-row">
                        <div className="sku-div-table-cell-header">Base Units</div>
                        <div className="sku-div-table-cell">17,568</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">17,568</div>
                    </div>

                    <div className="sku-div-table-row">
                        <div className="sku-div-table-cell-header">Incremental Units</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                    </div>

                    <div className="sku-div-table-row">
                        <div className="sku-div-table-cell-header">2024 Total Units</div>
                        <div className="sku-div-table-cell"><input type="number" value="17,568" placeholder='17,568' /></div>
                        <div className="sku-div-table-cell"><input type="number" value="0" /></div>
                        <div className="sku-div-table-cell"><input type="number" value="0" /></div>
                        <div className="sku-div-table-cell"><input type="number" value="0" /></div>
                        <div className="sku-div-table-cell"><input type="number" value="0" /></div>
                        <div className="sku-div-table-cell"><input type="number" value="0" /></div>
                        <div className="sku-div-table-cell"><input type="number" value="0" /></div>
                        <div className="sku-div-table-cell"><input type="number" value="0" /></div>
                        <div className="sku-div-table-cell"><input type="number" value="0" /></div>
                        <div className="sku-div-table-cell"><input type="number" value="0" /></div>
                        <div className="sku-div-table-cell"><input type="number" value="0" /></div>
                        <div className="sku-div-table-cell"><input type="number" value=""  /></div>
                        <div className="sku-div-table-cell">
                            <input type="number" value="17,568" placeholder='17,568' disabled />
                        </div>
                    </div>

                    <div className="sku-div-table-row">
                        <div className="sku-div-table-cell-header">Latest Forecast</div>
                        <div className="sku-div-table-cell">17,568</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">17,568</div>
                    </div>

                 

                    <div className="sku-div-table-row">
                        <div className="sku-div-table-cell-header">2023 Actuals</div>
                        <div className="sku-div-table-cell">26,370</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">26,370</div>
                    </div>

                    <div className="sku-div-table-row">
                        <div className="sku-div-table-cell-header">2022 Actuals</div>
                        <div className="sku-div-table-cell">26,856</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">9,990</div>
                        <div className="sku-div-table-cell">36,846</div>
                    </div>


                    <div
                        className="sku-div-table-row extended"
            
                    >
                        GTS
                    </div>

                    <div className="sku-div-table-row">
                        <div className="sku-div-table-cell-header">2024 Total GTS</div>
                        <div className="sku-div-table-cell">15,987</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">15,987</div>
                    </div>

                    <div className="sku-div-table-row">
                        <div className="sku-div-table-cell-header">Latest GTS</div>
                        <div className="sku-div-table-cell">15,987</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">15,987</div>
                    </div>

                    <div className="sku-div-table-row">
                        <div className="sku-div-table-cell-header">Latest GTS</div>
                        <div className="sku-div-table-cell">15,987</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">15,987</div>
                    </div>

                    <div className="sku-div-table-row">
                        <div className="sku-div-table-cell-header">2023 Actual GTS</div>
                        <div className="sku-div-table-cell">21,623</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">15,987</div>
                    </div>


                    <div className="sku-div-table-row">
                        <div className="sku-div-table-cell-header">2022 Actual GTS</div>
                        <div className="sku-div-table-cell">17,725</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">0</div>
                        <div className="sku-div-table-cell">8,192</div>
                        <div className="sku-div-table-cell">25,917</div>
                    </div>
                </div>
                <div className="sku-buttonWrapper">
                    <button className="sku-update-button">Update all SKU(s)</button>
                </div>
            </div>
        
        </Box>
    )
}

export default SKUForecastForm