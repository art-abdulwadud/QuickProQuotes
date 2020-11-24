export class QuoteDetails {
  constructor(
    public author: string,
    public quote: string,
    public date_created: Date,
    public upvotes: number,
    public downvotes: number,
    public submited_by: string
  ) {}
}