import React from "react";

// Reusable display card parsing structured billing and delivery destinations metrics
const AddressCard = ({ address }) => {
  return (
    <div>
      <div className="space-y-3 text-gray-700">
        {/* Render consolidated user full identification string */}
        <p className="font-semibold text-gray-900">{`${address?.firstName || ""} ${address?.lastName || ""}`}</p>

        {/* Complete physical location shipment mapping fields */}
        <p className="text-sm leading-relaxed">
          {`${address?.streetAddress || ""}, ${address?.city || ""}, ${address?.state || ""} - ${address?.zipCode || ""}`}
        </p>

        {/* Safe verification point showing customer mobile number grids */}
        <div className="space-y-1 text-sm">
          <p className="font-semibold text-gray-900">Phone Number</p>
          <p className="text-gray-600">{address?.mobile || "N/A"}</p>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
