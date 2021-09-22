import React from 'react';
import {Table} from '@mui/material/Table';
import {TableBody} from '@mui/material/TableBody';
import {TableCell} from '@mui/material/TableCell';
import {TableContainer} from '@mui/material/TableContainer';
import {TableHead} from '@mui/material/TableHead';
import {TableRow} from '@mui/material/TableRow';

export const BasicTable = props =>(
            <>
            <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Dessert (100g serving)</TableCell>
                    <TableCell align="right">Calories</TableCell>
                    <TableCell align="right">Fat&nbsp;(g)</TableCell>
                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                    <TableCell align="right">Protein&nbsp;(g)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow
                      key="row"
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        Row Name
                      </TableCell>
                      <TableCell align="right">Data</TableCell>
                      <TableCell align="right">Data</TableCell>
                      <TableCell align="right">Data</TableCell>
                      <TableCell align="right">Data</TableCell>
                      <TableCell align="right">Data</TableCell>
                      <TableCell align="right">Data</TableCell>
                    </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            </>
          );      
