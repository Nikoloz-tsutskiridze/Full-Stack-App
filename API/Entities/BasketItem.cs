using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities;

[Table("BasketItem")]
public class BasketItem
{
  public int Id { get; set; }
  public int Quantity { get; set; }

  // Navigation Properties
  public int ProductId { get; set; }
  public required Product Product { get; set; }

  public int BasketId { get; set; }
  public Basket Basket { get; set; } = null!;
}
