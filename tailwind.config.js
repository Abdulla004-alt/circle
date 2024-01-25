/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        main: "#444952",
        logo: "#111827",
        bor: "#E5E7EB",
        but: "#374151",
        butcol: "#FFF",
        textcol: "#476CEB",
        textcol2: "#111827",
        textcol3: "#6B7280",
        textcol4: "#3E62E0",
        textcol5: "#F5F5FF",
        textcol6: "#1E22FB",
        bordcol: "#F1F2F4",
        bordcol2: "#F0FDF4",
        textcol7: "#15803D",
        bordcol3: "#D1D5DB",
        textcol8: "#9CA3AF",
      },
      margin: {
        mar: "80px",
        mar1: "64px",
        mar2: "120px",
        mar3: "170px",
        mar4: "167px",
        mar5: "130px",
      },
      padding: {
        pad: "40px",
        pad2: "14px",
        pad3: "8px",
        pad4: "12px",
        pad5: "10px",
        pad6: "20px",
        pad7: "54px",
        pad8: "103px",
      },
      fontSize: {
        size: "52px",
        size2: "32px",
        size3: "36px",
        size4: "12px",
      },
      lineHeight: {
        hei: "56px",
        hei2: "40px",
        hei3: "44px",
      },
      borderRadius: {
        borderr: "20px",
      },
      width: {
        width: "370px",
        width1: "344px",
        width2: "148px",
        with3: "305px",
        with4: "132px",
      },
      gap: {
        gap1: "6px",
        gap2: "7px",
        gap3: "11px",
      },
      boxShadow: {
        boxsh1: "0px 3px 10px 0px rgba(0, 0, 0, 0.05)",
        boxsh2: "0px 10px 20px 0px rgba(0, 0, 0, 0.08)",
        boxsh3:
          "0px 3px 10px 0px rgba(0, 0, 0, 0.05), 0px 0px 0px 3px rgba(75, 78, 252, 0.15)",
        boxsh4: "0px 25px 50px -12px rgba(16, 24, 40, 0.25)",
      },
      backgroundColor: {
        backcolor1: "rgba(255, 255, 255, 0.42)",
      },
      borderWidth: {
        bordwidth1: "3px",
      },
    },
  },
  plugins: [],
};
