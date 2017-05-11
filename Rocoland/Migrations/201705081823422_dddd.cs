namespace Rocoland.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class dddd : DbMigration
    {
        public override void Up()
        {
            CreateIndex("dbo.Products", "ProductTypeId");
            CreateIndex("dbo.Products", "ProducerId");
            AddForeignKey("dbo.Products", "ProducerId", "dbo.Producers", "Id", cascadeDelete: true);
            AddForeignKey("dbo.Products", "ProductTypeId", "dbo.ProductTypes", "Id", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Products", "ProductTypeId", "dbo.ProductTypes");
            DropForeignKey("dbo.Products", "ProducerId", "dbo.Producers");
            DropIndex("dbo.Products", new[] { "ProducerId" });
            DropIndex("dbo.Products", new[] { "ProductTypeId" });
        }
    }
}
