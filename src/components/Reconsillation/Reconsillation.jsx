import React from 'react'
import './reconsil.css'

const Reconsillation = () => {
  return (
    <div className='recon-container recon-hide-scrollbar'><h1>Reconciliation</h1>

      <div className="recon-table">
        <div className="recon-row header">
          <div className="recon-cell"><label>Promotion ID</label><input type="text" className="recon-custom-button" value="Promotion ID" disabled /></div>
          <div className="recon-cell"><label>Promotion Name</label><input type="text" className="recon-custom-button" value="Evergreen Val Pack" disabled /></div>

        </div>
        <div className="recon-row">
          <div className="recon-cell"><label>Grand Parent</label><input type="text" className="recon-custom-button" value="Evergreen Val Pack" disabled /></div>
          <div className="recon-cell"><label>Indirect Customer</label><input type="text" className="recon-custom-button" value="ALDO" disabled /></div>

        </div>
        <div className="recon-row">
          <div className="recon-cell"><label>SKU PNAME</label><input type="text" className="recon-custom-button" value="PromotionID" disabled /></div>
          <div className="recon-cell"><label>Indirect Customer List Price</label><input type="text" className="recon-custom-button" value="2211P-10oz" disabled /></div>

        </div>
        <div className="recon-row">
          <div className="recon-cell"><label>EA Latest EA</label><input type="text" className="recon-custom-button" value="$ 876.00" disabled /></div>
          <div className="recon-cell"><label>Total Planned Spend</label><input type="text" className="recon-custom-button" value="$ 900.350" disabled /></div>

        </div>
    
      </div>

      <div className="recon-table">
        <div className="recon-tableheader">
          <div className="recon-gap">Created</div>
          <div className="recon-gap">Deduction Date</div>
          <div className="recon-gap">Deduction ID</div>
          <div className="recon-gap">Amount</div>
          <div className="recon-gap">User</div>
        </div>
        <div className="recon-row1">
          <div className="recon-gap1">12/22/23</div>
          <div className="recon-gap1">11/21/23</div>
          <div className="recon-gap1">AS-9910</div>
          <div className="recon-gap1">76,000</div>
          <div className="recon-gap1">Alen</div>

        </div>
        <div className="recon-row1">
          <div className="recon-gap1">11/30/23</div>
          <div className="recon-gap1">11/02/23</div>
          <div className="recon-gap1">AS-9034</div>
          <div className="recon-gap1">19,000</div>
          <div className="recon-gap1">Alen</div>
        </div>
      </div>
      <div className="recon-table">
        <div className="recon-row header">
          <div className="recon-cell"><label>Actual Spent</label><br /><input type="text" className="recon-custom-button-small-input" value="$ 876.00" disabled /></div>
          <div className="recon-cell"><label>Total Deduction</label><br /><input type="text" className="recon-custom-button-small-input" value="$ 95,000" disabled /></div>
        </div>
      </div>
      <div className="recon-space" >
        <form >
          <label>
            <input type="checkbox" name="PaymentReconcillied" /> Mark as Payment Reconcillied
          </label>
        </form><br />
      </div>
      <div className="recon-space" >
        <button className="recon-savebutton">Save</button>
        <button className="recon-cancelbutton">Cancel</button>
      </div>

    </div>
  )
}

export default Reconsillation