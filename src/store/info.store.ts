import create from 'zustand';

interface InfoStore {
  orgLogo?: string;
  orgDetails?: string;
  doctorSign?: string;
  doctorDetails?: string;
  setData: (data: {
    orgLogo?: string;
    orgDetails?: string;
    doctorSign?: string;
    doctorDetails?: string;
  }) => void;
}

export const useInfoStore = create<InfoStore>((set) => ({
  setData(data) {
    set(data);
  },
}));
