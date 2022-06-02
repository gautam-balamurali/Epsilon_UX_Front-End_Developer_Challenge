/**
 * Api configuration for the application
 */
export class APIConfig {
  public static readonly API_ENDPOINT =
    'https://raw.githubusercontent.com/epsilon-ux/code-challenge-resources/main/cookies.json';
}

/**
 * Product list configuration
 */
export class ProductListConfig {
  public static readonly displayedColumns: string[] = [
    'name',
    'price',
    'category',
  ];
}
