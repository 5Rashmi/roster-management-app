import React from "react";
import ProviderDetails from "./ProviderDetails";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import SlotsGrid from "./SlotsGrid";

const ProviderSlots = () => {
  const providers = useSelector((state: RootState) => state.provider.items);

  return (
    <>
      {providers.length > 0 ? (
        providers.map((provider, inx) => {
          const availability = provider.availabilities?.[0];
          const online = availability?.online_slots?.length ?? 0;
          const offline = availability?.offline_slots?.length ?? 0;
          return (
            <div key={inx} className="mt-6 flex">
              <ProviderDetails
                imageUrl={provider.image}
                name={provider.name}
                offlineSlots={offline}
                onlineSlots={online}
              />
              <SlotsGrid availability={availability} />
            </div>
          );
        })
      ) : (
        <h2 className="text-2xl font-semibold mt-4">No Providers Available</h2>
      )}
    </>
  );
};

export default ProviderSlots;
