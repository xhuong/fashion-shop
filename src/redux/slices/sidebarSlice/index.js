import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    isActive: false,
    heading: "",
    listSideBars: [
      { name: "search product", status: "unactive" },
      { name: "saved products", status: "unactive" },
      { name: "list products", status: "unactive" },
    ],
  },
  reducers: {
    openSidebar: (state, action) => {
      const newListSideBars = [...state.listSideBars];
      newListSideBars.splice(action.payload.sideBarItemActive.index, 1);
      return {
        ...state,
        isActive: true,
        heading: action.payload.sideBarItemActive.name,
        listSideBars: [...newListSideBars, { ...action.payload.sideBarItemActive }],
      };
    },
    closeSidebar: (state) => {
      // remove all status active
      const newListSideBars2 = [...state.listSideBars];

      const result = newListSideBars2.map((element) => {
        return {
          name: element.name,
          status: "unactive",
        };
      });

      return {
        ...state,
        isActive: false,
        heading: "",
        listSideBars: [...result],
      };
    },
  },
});

export const { openSidebar, closeSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
