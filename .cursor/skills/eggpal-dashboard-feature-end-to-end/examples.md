## Example: “Daily total eggs (all sizes) for month”

### SQL
Create:
- `EggPalAPI/EggPalAPI/StoredProcedure/GetEggTotalByMonth.sql`
- `EggPalAPI/EggPalAPI/StoredProcedure/ExecGetEggTotalByMonth.sql`

`GetEggTotalByMonth.sql` shape:
- Params: `@year INT, @month INT`
- Output columns:
  - `HarvestDate` (date)
  - `TotalQuantity` (int)

`ExecGetEggTotalByMonth.sql`:
- `EXEC dbo.GetEggTotalByMonth @year = @year, @month = @month;`

### API
In `EggPalAPI/Repository/DashboardRepository.cs`:
- Add a row DTO (e.g. `EggTotalDayRow { DateOnly HarvestDate; int TotalQuantity; }`)
- Add `GetEggTotalByMonth(year, month)` that reads `ExecGetEggTotalByMonth.sql` from `AppContext.BaseDirectory/StoredProcedure/`

In `EggPalAPI/Services/DashboardService.cs`:
- Add method `GetEggTotalByMonth(year, month)` returning a response DTO (recommended) or a list

In `EggPalAPI/Controllers/DashboardController.cs`:
- Add `[HttpGet("get-egg-total")]` with `year/month` query params and month validation

### Frontend
In `EggPal/src/entity/response/`:
- Add `EggTotalMonthResponse` type aligned with API output

In `EggPal/src/service/DashboardService.ts`:
- Add `getEggTotalMonth({ year, month })`

In `EggPal/src/hooks/Dashboard.ts`:
- Add `useGetEggTotalMonth(params)` query hook

In `EggPal/src/components/dashboard/`:
- Add a chart component that maps API days into chart points (similar to `EggProductionChart`)

### Common pitfalls to avoid (EggPal-specific)
- Keep SQL column aliases aligned with DTO property names (case-insensitive, but spelling must match)
- If reading SQL from disk in the API, the file must live under `StoredProcedure/` so it’s copied to output by the `.csproj` rule
- Prefer `DATE` (not `DATETIME`) for day-bucketed series

