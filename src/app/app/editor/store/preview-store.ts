import { create } from "zustand";

interface PreviewStore {
  isPreviewVisible: boolean;
  isModalOpen: boolean;
  isTouchDevice: boolean;
  setPreviewVisible: (visible: boolean) => void;
  setModalOpen: (open: boolean) => void;
  togglePreview: () => void;
}

export const usePreviewStore = create<PreviewStore>((set) => ({
  isPreviewVisible: typeof window !== "undefined" ? !("ontouchstart" in window) : true,
  isModalOpen: false,
  isTouchDevice: typeof window !== "undefined" ? "ontouchstart" in window : false,
  setPreviewVisible: (visible) => set({ isPreviewVisible: visible }),
  setModalOpen: (open) => set({ isModalOpen: open }),
  togglePreview: () =>
    set((state) => ({
      isPreviewVisible: !state.isPreviewVisible,
      isModalOpen: state.isTouchDevice ? !state.isModalOpen : false,
    })),
}));
