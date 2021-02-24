export type ThemeFields = {
    background: string;
    secondary_variant: string;
    primary: string;
    primary_variant: string;
    secondary: string;
    surface: string;
    error: string;
    on_primary: string;
    on_secondary: string;
    on_surface: string;
    on_error: string;
    column: string;
    card: string;
};

export type ThemeType = {
    [key: string]: ThemeFields;
};
