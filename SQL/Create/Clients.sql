--USE [VisionRMM_DEV]
--GO

/****** Object:  Table [dbo].[Client]    Script Date: 6/15/2023 9:46:15 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO
IF EXISTS
(
    SELECT *
    FROM sys.objects
    WHERE object_id = OBJECT_ID(N'dbo.Clients')
)
    BEGIN
        DROP Table Clients;
END;
CREATE TABLE [dbo].[Clients](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](128) NOT NULL,	
	[IP] [nvarchar](128) NOT NULL,
	[MainId] int NULL,
	[Address] [nvarchar](128) NULL,
	[Email] [nvarchar](64) NULL,
	[Phone] [nvarchar](32) NULL,
	[Contact] [nvarchar](128) NULL,
	[CreatedAt] [smalldatetime] NULL default sysdatetime(),
	[CreatedBy] [nvarchar](128) NULL,
	[UpdatedAt] [smalldatetime] NOT NULL default sysdatetime(),
	[UpdatedBy] [nvarchar](128) NOT NULL
CONSTRAINT [PK_Clients] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO


