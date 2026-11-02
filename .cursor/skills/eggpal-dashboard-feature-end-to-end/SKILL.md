---
name: eggpal-dashboard-feature-end-to-end
description: Creates or updates EggPal dashboard/analytics features end-to-end across SQL Server (stored procedures), EggPalAPI (.NET controller/service/repository), and EggPal (React service/hooks/components). Use when adding a new dashboard metric, analytics chart, monthly/daily aggregation, or a new dashboard endpoint backed by SQL.
disable-model-invocation: true
---

# EggPal Dashboard Feature (End-to-End)

Use this when adding/updating a dashboard/analytics metric that touches **SQL → API → React**.

## Inputs (ask if missing)
- Metric name + where it shows (dashboard card / chart / analytics page)
- Time grain (daily/monthly) + filters (year/month/range)
- Source tables (usually `eggharvest`, `sales`, `expenses`)

## Conventions (EggPal-specific)
- Stored procs live in `EggPalAPI/EggPalAPI/StoredProcedure/`
- Create **two files** for proc-based features:
  - `Get<Thing>.sql` (defines `dbo.Get<Thing>`)
  - `ExecGet<Thing>.sql` (a tiny `EXEC ...` wrapper)
- API reads `Exec*.sql` from disk via `AppContext.BaseDirectory` (see `DashboardRepository`)
- `StoredProcedure/*.sql` is copied to output by `EggPalAPI.csproj`

## Do this checklist
- **Decide data access**
  - Simple totals → LINQ in `EggPalAPI/Repository/DashboardRepository.cs`
  - Grouped/time-series/stats → stored procedure + `_context.Database.SqlQueryRaw<T>()`
- **SQL (if used)**
  - `CREATE OR ALTER PROCEDURE`, `SET NOCOUNT ON;`, parameterize
  - Alias columns to match C# row DTO property names
- **API**
  - Add row DTO + repo method (`DashboardRepository`)
  - Add service method (`DashboardService`)
  - Add endpoint in `DashboardController` (`[HttpGet("get-...")]`) + param validation
- **Frontend**
  - Add/extend response types in `EggPal/src/entity/response/`
  - Add client in `EggPal/src/service/DashboardService.ts`
  - Add hook in `EggPal/src/hooks/Dashboard.ts`
  - Add UI in `EggPal/src/components/dashboard/` or `EggPal/src/components/analytics/`
- **Validate**
  - `EXEC dbo.Get<Thing>` works in SSMS (if proc-based)
  - API can find the `Exec*.sql` at runtime
  - TS types match JSON shape; chart renders

Examples: see [examples.md](examples.md).

