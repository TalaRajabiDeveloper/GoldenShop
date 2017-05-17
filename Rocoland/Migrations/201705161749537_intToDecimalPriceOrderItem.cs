namespace Rocoland.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class intToDecimalPriceOrderItem : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.OrderItems", "Price", c => c.Decimal(nullable: false, precision: 18, scale: 2));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.OrderItems", "Price", c => c.Int(nullable: false));
        }
    }
}
