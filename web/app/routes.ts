import { type RouteConfig, index } from "@react-router/dev/routes";

// この場合はhome.tsxが親URLそのものに対応する画面になる
export default [index("routes/home.tsx")] satisfies RouteConfig;
