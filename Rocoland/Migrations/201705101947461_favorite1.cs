namespace Rocoland.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class favorite1 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.ProductApplicationUsers",
                c => new
                    {
                        Product_Id = c.Int(nullable: false),
                        ApplicationUser_Id = c.String(nullable: false, maxLength: 128),
                    })
                .PrimaryKey(t => new { t.Product_Id, t.ApplicationUser_Id })
                .ForeignKey("dbo.Products", t => t.Product_Id, cascadeDelete: true)
                .ForeignKey("dbo.AspNetUsers", t => t.ApplicationUser_Id, cascadeDelete: true)
                .Index(t => t.Product_Id)
                .Index(t => t.ApplicationUser_Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.ProductApplicationUsers", "ApplicationUser_Id", "dbo.AspNetUsers");
            DropForeignKey("dbo.ProductApplicationUsers", "Product_Id", "dbo.Products");
            DropIndex("dbo.ProductApplicationUsers", new[] { "ApplicationUser_Id" });
            DropIndex("dbo.ProductApplicationUsers", new[] { "Product_Id" });
            DropTable("dbo.ProductApplicationUsers");
        }
    }
}
